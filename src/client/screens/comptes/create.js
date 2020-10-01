import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Modal from '../../components/common/Modal';

import styles from './styles';
import { auth } from '../../../config/constants';

const validatorUsers = () => [];

const signTitle = auth.signUp;

const DisplyErrorComponet = ({ errors, name }) => {
  if (!errors || !name) {
    return <View />;
  }
  return (
    <View style={styles.inputVew}>
      <Text style={styles.errorShow}>{errors}</Text>
    </View>
  );
};

const roles = (r) => (r === 1 ? auth.user_usr : auth.user_adm);

const ModalRole = ({ setRole, role }) => (
  <View>
    <Text style={styles.modalRoleTitle}>{auth.role}</Text>
    <View style={styles.modalRoleContaint}>
      <TouchableOpacity onPress={() => setRole(1)}>
        <Text style={[styles.modalRoleText, { backgroundColor: role === 1 ? '#97CC53' : 'white' }]}>{roles(1)}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.modalRoleContaint}>
      <TouchableOpacity onPress={() => setRole(2)}>
        <Text style={[styles.modalRoleText, { backgroundColor: role === 2 ? '#97CC53' : 'white' }]}>{roles(2)}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SignInScreen = (props) => {
  const { signUp, user } = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nom, setNom] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  const [adress, setAdress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [phone_fix, setPhone_fix] = React.useState('');
  const [code_postal, setCode_postal] = React.useState('');
  const [role, setRole] = React.useState(1);
  const [messageall, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const callBack = (res) => {
    setRole(1);
    setLoading(false);
    if (res && res.error && res.error.message) {
      setMessage(res.error.message);
      return;
    }
    if (res && res.errors) {
      const toObjectErrors = res.errors.reduce((acc, { name, message }) => ({ ...acc, [name]: message }), {});
      setErrors(toObjectErrors);
      return;
    }
    if (res && res.data) {
      setMessage(auth.succes);
    }

  };

  const createCompte = async () => {
    setMessage('');
    const data = { email, password, role, code_postal, adress, phone, phone_fix, nom, prenom };
    const validators = validatorUsers(data);
    if (validators && validators.length > 0) {
      const toObjectErrors = validators.reduce((acc, { name, message }) => ({ ...acc, [name]: message }), {});
      setErrors(toObjectErrors);
    }
    await signUp(data, (res) => callBack(res));
  };

  const isAdmin = user && user.role === 2;

  const title = isAdmin ? signTitle : auth.profil;

  return (
    <View style={styles.container}>
      <View
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.body}>
          <View style={styles.titleContainer}>
            <Text style={styles.textPage}>{title}</Text>
          </View>
          <View>
            {isAdmin && <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.account_type}</Text>
              <View style={styles.modalInput}>
                <Text style={[styles.mgnText, styles.textEditColor]}>{roles(role)}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    // setRoleModal(true);
                  }}>
                  <Text style={styles.mgnText}>{auth.edit}</Text>
                </TouchableOpacity>
              </View>
            </View>}
            <DisplyErrorComponet
              errors={errors.role}
              name='role'
            />
            <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.nom}</Text>
              <TextInput
                placeholder={auth.nom}
                value={nom}
                onChangeText={setNom}
                style={styles.TextInput}
              />
            </View>
            <DisplyErrorComponet
              errors={errors.prenom}
              name='nom'
            />
            <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.prenom}</Text>
              <TextInput
                placeholder={auth.prenom}
                value={prenom}
                onChangeText={setPrenom}
                style={styles.TextInput}
              />
            </View>
            <DisplyErrorComponet
              errors={errors.prenom}
              name='prenom'
            />
            <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.phone}</Text>
              <TextInput
                placeholder={auth.phone}
                value={phone}
                onChangeText={setPhone}
                style={styles.TextInput}
              />
            </View>
            <DisplyErrorComponet
              errors={errors.phone}
              name='phone'
            />
            <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.fix}</Text>
              <TextInput
                placeholder={auth.fix}
                value={phone_fix}
                onChangeText={setPhone_fix}
                style={styles.TextInput}
              />
            </View>
            <DisplyErrorComponet
              errors={errors.fix}
              name='fix'
            />
            <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.adress}</Text>
              <TextInput
                placeholder={auth.adress}
                value={adress}
                onChangeText={setAdress}
                style={styles.TextInput}
              />
            </View>
            <DisplyErrorComponet
              errors={errors.adress}
              name='adress'
            />
            <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.code}</Text>
              <TextInput
                placeholder={auth.code}
                value={code_postal}
                onChangeText={setCode_postal}
                style={styles.TextInput}
              />
            </View>
            <DisplyErrorComponet
              errors={errors.code_postal}
              name='code_postal'
            />
            <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.identification}</Text>
              <TextInput
                placeholder={auth.identification}
                value={email}
                onChangeText={setEmail}
                style={styles.TextInput}
              />
            </View>
            <DisplyErrorComponet
              errors={errors.email}
              name='email'
            />
            {isAdmin && <View style={styles.inputVew}>
              <Text style={styles.labelInput}>{auth.password}</Text>
              <TextInput
                placeholder={auth.password}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.TextInput}
                autoCompleteType={auth.password}
              />
            </View>}
            <DisplyErrorComponet
              errors={errors.password}
              name={auth.password}
            />
            <Text style={styles.messageShow}>{messageall}</Text>
          </View>
          {isAdmin && <View>
            {!loading ? <Button
              // disabled={isInvalidate}
              onPress={async () => await createCompte()}
              title={signTitle}
              color={'#2C7AC3'}
              style={styles.btn}
            /> :
              <ActivityIndicator size={'large'} />}
          </View>}
        </View>
      </View>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <ModalRole setRole={setRole} role={role} />
      </Modal>
    </View>
  );
};

export default SignInScreen;
