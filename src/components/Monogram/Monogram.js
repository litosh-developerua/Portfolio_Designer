import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';


export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="70"
      height="70"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
    
      <defs>
        <clipPath id={clipId}>
          <path d="M.62,29.58a2.47,2.47,0,0,0,1.81-.79,3,3,0,0,0,.79-1.93V3.1A2.68,2.68,0,0,0,1.87.77,2.32,2.32,0,0,0,.62.44H.09V0H12.43l0,.44H11.9A2.46,2.46,0,0,0,9.66,1.76,2.61,2.61,0,0,0,9.3,3.1V26.86a2.68,2.68,0,0,0,.78,1.93,2.46,2.46,0,0,0,1.82.79h.49l0,.42H.09v-.42ZM29.91,30H26.58q-6.15,0-8.72-3.56C13,19.5,10.59,16,10.59,15.86L20.22,2.41a1.35,1.35,0,0,0,.32-.78,1.28,1.28,0,0,0-.12-.58A1.16,1.16,0,0,0,19.29.4h-.42V0h9.3V.4H28a5.5,5.5,0,0,0-4.42,2.05l-7.93,9.89L25.77,26.92c1.25,1.7,2.63,2.6,4.14,2.66Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
