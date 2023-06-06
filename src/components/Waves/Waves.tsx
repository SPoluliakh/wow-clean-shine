import * as SC from './Waves.styled';

export const Waves = () => {
  return (
    <SC.Waves
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <SC.Parallax>
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="#71C0D8" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="#52AACD" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="#2B8BC5" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#2066B0" />
      </SC.Parallax>
    </SC.Waves>
  );
};
