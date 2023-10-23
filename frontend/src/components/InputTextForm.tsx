'use client';

import Image from 'next/image';
import { useState } from 'react';
import eyeIcon from '../../public/images/mingcute-eye-line.svg';
import { poppinsLight } from '../utils/fonts';

type InputTextType = {
  name: string
  hidePasswordIcon: boolean
};

export default function InputTextForm(props: InputTextType) {
  const { name, hidePasswordIcon } = props;

  const [px, setPx] = useState('text-[18px]');

  return (
    <label
      className={
        `${poppinsLight.className} ${px}
        tracking-[0.54px] focus:text-[12px] 
        duration-200 h-full`
}
    >
      {name}
      <div className="flex relative mb-[25px]">
        <input
          onFocus={ () => setPx('text-[10px]') }
          onBlur={ () => setPx('text-[18px]') }
          type="text"
          name="name"
          className="border-b border-black w-full outline-none py-[4px] text-[14px]"
        />
        {hidePasswordIcon
          ? <Image
              src={ eyeIcon }
              alt="Icone de um olho"
              className="absolute right-0 bottom-2 cursor-pointer"
          />
          : ''}
      </div>
    </label>
  );
}
