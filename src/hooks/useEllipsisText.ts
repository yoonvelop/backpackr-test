import React, { useEffect } from 'react';

/**
 * 글을 순회하면서 ref의 크기보다 글이 넘칠경우 ...을 붙여 사이즈를 조절해 리턴
 * @param ref HTMLElement
 * @param text string
 * @param maxLines  number
 */
const useEllipsisText = (
  ref: React.RefObject<HTMLElement>,
  text: string,
  maxLines: number,
) => {
  useEffect(() => {
    const clampText = (element: HTMLElement, maxLines: number) => {
      if (!element) return;
      if (maxLines < 1) return;
      console.log(element, maxLines, text);

      // 초기 텍스트 설정
      element.textContent = text;

      const lineHeight = parseInt(
        window.getComputedStyle(element).lineHeight,
        10,
      );
      const maxHeight = lineHeight * maxLines;

      // 텍스트가 지정된 줄 수보다 많아서 요소를 넘칠 경우, 텍스트의 마지막 문자를 하나씩 제거
      while (element.scrollHeight > maxHeight) {
        const currentText: string = element.textContent || '';
        console.log(element.scrollHeight, maxHeight, currentText);
        element.textContent = currentText.slice(0, -1);
      }
      // 최종적으로 마지막 3글자를 제거하고 ...을 추가
      if (element.scrollHeight >= element.clientHeight) {
        const currentText = element.textContent || '';
        element.textContent = `${currentText.slice(0, -4)}...`;
        console.log(element.textContent);
      }
    };

    if (ref.current) {
      clampText(ref.current, maxLines);
    }
  }, [ref, text, maxLines]);
};

export default useEllipsisText;
