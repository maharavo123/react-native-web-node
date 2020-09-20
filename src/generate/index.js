const fs = require('fs');

const { COPYFILE_EXCL } = fs.constants;

const { metier, models, template, controller } = require('../data/alias');

const data = require(models + '/models.json');

const metierCallBack = (id, name, entity, res) => `  '${id}': {
    name: '${name}${entity}',
    value: (res, data, getState) => {
      console.log({ res, data, getState });
      return { ${res} };
    },
  },`

const metierIndex = `${metier}/index.js`;
if (fs.existsSync(metierIndex)) {
  fs.unlinkSync(metierIndex);
} else {
  fs.copyFileSync(`${template}/metier/index`, metierIndex, COPYFILE_EXCL);
}

data && data.ownedElements && data.ownedElements.filter(i => i._type === 'UMLClass').map(className => {
  const { attributes, operations } = className;
  const entityUp = className.name;
  const entity = entityUp.toLowerCase();
  const pMetier = `${metier}/${entity}.js`;
  const pControllerFolder = `${controller}/${entity}`;
  // const pController = `${controller}/${entity}/index.js`;

  if (fs.existsSync(pControllerFolder)) {
    console.log('The path exists.');
  } else {
    console.log('source.txt was copied to destination.txt');
    // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
    fs.mkdirSync(pControllerFolder);
    fs.copyFileSync(`${template}/controller/index`, `${pControllerFolder}/index.js`, COPYFILE_EXCL);
    
    fs.copyFileSync(`${template}/controller/stateToProps`, `${pControllerFolder}/stateToProps.js`, COPYFILE_EXCL);
  }
  console.log({ operations });
  if (!operations){
    return;
  }
  const oldController = require(`${controller}/${entity}`);
  // console.log({ oldController: oldController() });
  const allController = operations.reduce((acc, curr) => {
    const { _id, name } = curr;
    const { oldC, newC } = acc;
    const oldCByID = oldController[_id];
    if(!oldCByID) {
      newC.push(curr);
    } else if(oldCByID.name !== `${name}${entityUp}`) {
      console.log({ oldCByID, curr });
      oldC.push({ ...curr, newName: `${name}${entityUp}`, oldName: oldCByID.name });
    }
    return { oldC, newC };
  }, { oldC: [], newC: []});
  
  if (fs.existsSync(pMetier)) {
    console.log('The path exists.');
  } else {
    console.log('source.txt was copied to destination.txt');
    // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
    fs.copyFileSync(`${template}/metier/entity`, pMetier, COPYFILE_EXCL);
  }
  const oldMetier = require(`${metier}/${entity}`);
  const allMetier = operations.reduce((acc, curr) => {
    const { _id, name } = curr;
    const { oldM, newM } = acc;
    const oldMByID = oldMetier[_id];
    if(!oldMByID) {
      newM.push(curr);
    } else if(oldMByID.name !== `${name}${entityUp}`) {
      console.log({ oldMByID, curr });
      oldM.push({ ...curr, newName: `${name}${entityUp}`, oldName: oldMByID.name });
    }
    return { oldM, newM };
  }, { oldM: [], newM: []});
  const { oldM, newM } = allMetier;
  console.log({ allMetier });
  const templateMetier = `${metier}/template-${entity}.js`;
  let oldLine, lnString;
  fs.readFileSync(pMetier).toString().split('\n').forEach(function (line) {
    lnString = line.toString();
    const isID = oldM && oldM.length > 0 && oldLine && oldLine.split('AAAAAA') && oldLine.split('AAAAAA').length > 1
    if(isID) {
      const checkID = oldM.find(({ _id }) => oldLine.includes(_id));
      if (checkID) {
        console.log('checkID =====>', checkID);
        console.log('lnString =====>', lnString);
        lnString = lnString.replace(checkID.oldName, checkID.newName);
        console.log('lnString new =====>', lnString);
      }
    }
    fs.appendFileSync(templateMetier, lnString + "\n");
    const isExport = line.split('export default');
    if (isExport && isExport.length > 1) {
      newM.forEach(({ _id, name, retour }) => fs.appendFileSync(templateMetier, metierCallBack(_id, name, entityUp, retour) + "\n"))
      // fs.appendFileSync(templateMetier, metierCallBack(_id, name, className.name) + "\n");
    }
    // oldM.forEach(({ _id, name }) => {

    // });
    oldLine = lnString;
  });
  fs.unlinkSync(pMetier);
  fs.copyFileSync(templateMetier, pMetier, COPYFILE_EXCL);
  fs.unlinkSync(templateMetier);
});
