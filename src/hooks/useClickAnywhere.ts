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
export function useClickAnywhere(handler: (event: MouseEvent) => void) {
  // TODO: Implement this hook properly
  // 1. Add event listener to document for 'click' events
  // 2. Call the handler with the event
  // 3. Clean up the event listener on unmount
  
  // Use a ref to store the latest handler
  const handlerRef = useRef(handler);
  handlerRef.current = handler;
  
  useEffect(() => {
    // Placeholder implementation - replace with actual implementation
    const handleClick = (event: MouseEvent) => {
      // TODO: Call the handler with the event
      handlerRef.current(event);
    };
    
    // TODO: Add event listener to document
    // Use a timeout to avoid immediate triggering of the click that opened the modal
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 0);
    
    // TODO: Return cleanup function
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array since handlerRef is used
}