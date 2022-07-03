import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {
  isActiveModalNotificationTrue,
  isActiveModalNotificationFalse,
} from '../../redux/actions/modalNotificationAction';

const ModalNotification = () => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const Modal = DeviceEventEmitter.addListener(
      'MODAL',
      ({isShow, options}) => {
        setVisible(isShow);
        setOptions(options);
      },
    );

    return () => {
      Modal.remove();
    };
  }, []);

  useEffect(() => {
    visible
      ? dispatch(isActiveModalNotificationTrue())
      : dispatch(isActiveModalNotificationFalse());
  }, [visible]);

  const onAccept = () => {
    setVisible(false);
    options.onAccept && options.onAccept();
  };
  const onCancel = () => {
    setVisible(false);
    options.onCancel && options.onCancel();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles().container}>
        <View style={styles().modalView}>
          <View style={styles(options.type).titleView}>
            {!!options.title ? (
              <Text style={styles().titleText}>{options.title}</Text>
            ) : (
              <Text style={styles().titleText}>Thông báo</Text>
            )}
          </View>
          <View style={styles().bodyView}>
            <View style={styles().messageView}>
              {options.message && (
                <Text style={styles().messageText}>{options.message}</Text>
              )}
            </View>

            <View style={styles().buttonView}>
              {options.isCancel && (
                <TouchableOpacity
                  style={styles().cancelButtonView}
                  onPress={onCancel}>
                  <View style={styles().cancelButtonView}>
                    {options.titleCancel ? (
                      <Text style={styles().textCancel}>
                        {options.titleCancel}
                      </Text>
                    ) : (
                      <Text style={styles().textCancel}>Cancel</Text>
                    )}
                  </View>
                </TouchableOpacity>
              )}

              {options.isAccept && (
                <TouchableOpacity
                  style={styles().acceptButtonView}
                  onPress={onAccept}>
                  <View style={styles().acceptButtonView}>
                    {!!options.titleAccept ? (
                      <Text style={styles().textAccept}>
                        {options.titleAccept}
                      </Text>
                    ) : (
                      <Text style={styles().textAccept}>Process</Text>
                    )}
                  </View>
                </TouchableOpacity>
              )}
              {!!options.isAccept == false && !!options.isCancel == false && (
                <TouchableOpacity
                  style={styles().acceptButtonView}
                  onPress={() => setVisible(false)}>
                  <View style={styles().acceptButtonView}>
                    <Text style={styles().textAccept}>Ok</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const SendNotification = ({isShow, options}) => {
  DeviceEventEmitter.emit('MODAL', {isShow, options});
};

export default ModalNotification;
