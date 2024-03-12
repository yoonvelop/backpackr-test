import React, { useState, useEffect } from 'react';
import styles from '../styles/components/TextField.module.css';
import classNames from 'classnames';

type TextInputProps = {
  initialText: string; // 초깃값
  maxLength: number; // 제한 글자수
  disabledPlaceholder?: string; // 비활성화 placeholder
  disabled?: boolean; // 비활성화 여부
  readOnly?: boolean; // 읽기전용 여부
};

const TextInput: React.FC<TextInputProps> = ({
  initialText,
  maxLength,
  disabledPlaceholder,
  disabled = false,
  readOnly = false,
}) => {
  const [text, setText] = useState(initialText); // 입력 text 값
  const [isChanged, setIsChanged] = useState(false); // text가 변경되었는지 여부

  const placeholder = disabledPlaceholder
    ? disabledPlaceholder
    : '내용을 입력해 주세요';

  // 초깃값과 다를 경우만 버튼 활성화
  useEffect(() => {
    setIsChanged(text !== initialText);
  }, [text, initialText]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };

  const handleSave = () => {
    alert(`저장 내용 : ${text} `);
  };

  return (
    <div className={styles['text-field']}>
      <div className={styles['textarea-container']}>
        <textarea
          className={classNames(styles['text-area'], {
            [styles.disabled]: disabled,
            [styles.readonly]: readOnly,
          })}
          value={text}
          aria-placeholder={placeholder}
          placeholder={placeholder}
          onChange={handleTextChange}
          disabled={disabled || readOnly}
          aria-label="텍스트 입력"
          aria-readonly={readOnly}
        />
        <div
          className={classNames(styles['characters-remaining'], {
            [styles.disabled]: disabled || readOnly,
          })}
          aria-label="남은 텍스트 수"
        >
          {maxLength - text.length} / {maxLength}
        </div>
      </div>

      {isChanged && (
        <button
          type="button"
          aria-label="저장"
          className={styles['save-button']}
          onClick={handleSave}
          disabled={!isChanged || disabled}
          aria-disabled={!isChanged || disabled}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default TextInput;
