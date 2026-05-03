import { useEffect, useRef } from 'react';

/**
 * Custom hook that calls the provided handler whenever the user clicks anywhere on the document.
 * It should clean up properly when the component unmounts.
 *
 * @param handler - Function to call when a click occurs anywhere on the document
 *
 * @example
 * // Usage example:
 * useClickAnywhere((event) => {
 *   console.log('Clicked at:', event.clientX, event.clientY);
 * });
 *
 * // For closing modals when clicking outside:
 * useClickAnywhere((event) => {
 *   if (modalRef.current && !modalRef.current.contains(event.target)) {
 *     closeModal();
 *   }
 * });
 */
export function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, handler: (event: MouseEvent | TouchEvent)=> void) {
  const handlerRef = useRef(handler);
  useEffect(()=>{
    handlerRef.current = handler;
  }, [handler]);
  
  useEffect(() => {
    if(typeof document === 'undefined') return;
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if(!ref.current || ref.current.contains(event.target as Node)) return;
      handlerRef.current(event);
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
  
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);    };
  }, [ref]); 
}