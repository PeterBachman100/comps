import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";


function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);    
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept.</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
             <p>
                Nulla tempus porttitor neque, sed consectetur enim aliquam eget. Nam finibus eleifend nunc, id aliquam metus posuere ac. Morbi quis nisi eu est congue aliquet. In finibus nulla sit amet nisl auctor, et cursus erat mollis. Nam eu ligula non risus ultricies pharetra sit amet sed nulla. Vivamus aliquam tempor varius. Donec in dui lacinia ante interdum suscipit vitae aliquet libero. Maecenas commodo semper pellentesque. Fusce nec elementum risus, in iaculis lorem. Pellentesque libero dolor, ornare vel hendrerit id, feugiat sed lacus. Suspendisse hendrerit erat vitae dolor vehicula, ac aliquam nisi blandit.
            </p>
        </div>
    );
}

export default ModalPage