/**
 * @file
 * @copyright 2022 raffclar
 * @license MIT
 */
import { Box } from "./Box";
import { Button } from "./Button";

type DialogProps = {
  children: any;
  height?: string;
  onClose: () => void;
  title: any;
  width?: string;
};

export function Dialog(props: DialogProps) {
  const { children, height, onClose, title, width } = props;

  return (
    <div className="Dialog">
      <Box className="Dialog__content" height={height} width={width ?? "370px"}>
        <div className="Dialog__header">
          <div className="Dialog__title">{title}</div>
          <Box mr={2}>
            <Button
              color="transparent"
              icon="window-close-o"
              lineHeight="22px"
              mr="-3px"
              onClick={onClose}
              textAlign="center"
              tooltip="Close"
              tooltipPosition="bottom-start"
              width="26px"
            />
          </Box>
        </div>
        {children}
      </Box>
    </div>
  );
}

type DialogButtonProps = {
  children: any;
  onClick: () => void;
};

function DialogButton(props: DialogButtonProps) {
  const { children, onClick } = props;

  return (
    <Button
      className="Dialog__button"
      onClick={onClick}
      verticalAlignContent="middle"
    >
      {children}
    </Button>
  );
}

Dialog.Button = DialogButton;

type UnsavedChangesDialogProps = {
  documentName: string;
  onClose: () => void;
  onDiscard: () => void;
  onSave: () => void;
};

export function UnsavedChangesDialog(props: UnsavedChangesDialogProps) {
  const { documentName, onClose, onDiscard, onSave } = props;

  return (
    <Dialog onClose={onClose} title="Notepad">
      <div className="Dialog__body">
        Do you want to save changes to {documentName}?
      </div>
      <div className="Dialog__footer">
        <DialogButton onClick={onSave}>Save</DialogButton>
        <DialogButton onClick={onDiscard}>Don&apos;t Save</DialogButton>
        <DialogButton onClick={onClose}>Cancel</DialogButton>
      </div>
    </Dialog>
  );
}
