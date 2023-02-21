import { Component } from 'solid-js';
import { ActionModal } from 'src/app/views/modals/actions-modal/action-modal';
import { Identifiable } from 'src/app/models/identifiable';
import { ErrorIcon } from 'src/app/components';

interface TransactionCanceledModalProps extends Identifiable {
    onClose: () => void;
}

export const TransactionCanceledModal: Component<TransactionCanceledModalProps> = props => {
    return (
        <ActionModal
            headerTranslationKey="actionModal.transactionCanceled.header"
            textTranslationKey="actionModal.transactionCanceled.text"
            icon={<ErrorIcon size="m" />}
            onClose={() => props.onClose()}
            id={props.id}
        />
    );
};
