import { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Selectors, Actions } from '../duck';
import { TOAST_TIME_OUT } from '../Constants';

export const useCustomToast = () => {
  const { addToast } = useToasts();
  const { toast } = Selectors();
  const { set_toast, callback } = Actions();

  useEffect(() => {
    if (toast && toast.is_open) {
      addToast(toast.message, {
        appearance: toast.status,
        autoDismiss: true,
        autoDismissTimeout: TOAST_TIME_OUT,
      });
      setTimeout(() => {
        callback(set_toast);
      }, TOAST_TIME_OUT);
    }
  }, [toast, addToast, callback, set_toast]);
};
