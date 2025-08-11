import {FC, MouseEventHandler, useState} from 'react';
import {Animated} from './Animated';
import {MainMenu} from './MainMenu';

export const MobileMenuDrawer: FC<{onClose: () => void}> = ({onClose}) => {
  const [displayed, setDisplayed] = useState(true);

  const close = () => {
    // ordering animated blocks to animate itself out
    // onAnimatedObjectGone is going to be final step
    setDisplayed(false);
  };
  const onAnimatedObjectGone = () => {
    // calling onClose, letting the parent element know menu is gone and it can be removed from DOM
    onClose();
  };

  const blockClick: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
  };

  const hiddenOrNot = '';
  return (
    <div className="md:w-80" onClick={close}>
      <Animated onHide={onAnimatedObjectGone}
      show={displayed}
      className="fixed h-full w-full z-20  duration-500 ease-out md:hidden"
      animation="bg-black/80"
      />
      <Animated show={displayed}
      className="z-1000 fixed duration-500 ease-out -left-100"
      animation="left-0"
      onClick={blockClick}
      >
        <MainMenu className="flex" onClick={() => close()} />
      </Animated>
  </div>
  );
};
