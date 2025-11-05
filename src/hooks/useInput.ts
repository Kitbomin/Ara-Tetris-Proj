// 1. useState를 사용해 현재 눌린 키를 관리

import { useEffect, useState } from "react";

// 2. keydown 이벤트
//    -> setKey 사용?

// 3. keyUp 이벤트
//    ->

// const pressKey = useInput();

// const {left, right, down, up} = useInput();
// 이거 reducer를 사용했음 그냥 switch가 아님...

type  Direction =  'ArrowLeft' | 'ArrowRight' | 'ArrowDown' | 'ArrowUp' | 'Space' | null;

type KeyState = {
  left: boolean;
  right: boolean;
  down: boolean;
  up: boolean;
  space: boolean;
};



const useInput = () => {
  const [pressedKey, setPressedKey] = useState<Direction>(null);

  const [keyState, setKeyState] = useState<KeyState>({
    left: false,
    right: false,
    down: false,
    up: false,
    space: false
  });
  
  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowLeft':
        setPressedKey('ArrowLeft');
        setKeyState(prev => ({ ...prev, left: true}));
        break;
      case 'ArrowRight':
        setPressedKey('ArrowRight');
        setKeyState(prev => ({ ...prev, right: true}));
        break;
      case 'ArrowDown':
        setPressedKey('ArrowDown');
        setKeyState(prev => ({ ...prev, down: true}));
        break;
      case 'ArrowUp':
        setPressedKey('ArrowUp');
        setKeyState(prev => ({ ...prev, up: true}));
        break;
      case 'Space':
        setPressedKey('Space');
        setKeyState(prev => ({ ...prev, space: true}));
        break;
    }
  }
  const handleKeyUp = (e: KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowLeft':
        setPressedKey('ArrowLeft');
        setKeyState(prev => ({ ...prev, left: false}));
        break;
      case 'ArrowRight':
        setPressedKey('ArrowRight');
        setKeyState(prev => ({ ...prev, right: false}));
        break;
      case 'ArrowDown':
        setPressedKey('ArrowDown');
        setKeyState(prev => ({ ...prev, down: false}));
        break;
      case 'ArrowUp':
        setPressedKey('ArrowUp');
        setKeyState(prev => ({ ...prev, up: false}));
        break;      
      case 'Space' :
        setPressedKey('Space');
        setKeyState(prev => ({ ...prev, space: false}));
        break;
    }
    setPressedKey(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return { pressedKey, keyState }
}

export default useInput;



