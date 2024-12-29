/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.RefObject<HTMLElement>;
        src?: string;
        autoplay?: boolean;
        loop?: boolean;
        controls?: boolean;
        style?: React.CSSProperties;
      };
    }
  }
}

declare module '@lottiefiles/dotlottie-player' {
  export class DotLottiePlayer extends HTMLElement {
    load(src: string): void;
    play(): void;
    pause(): void;
    stop(): void;
    setDirection(direction: number): void;
    setLooping(loop: boolean): void;
    setSpeed(speed: number): void;
    seek(frame: number): void;
    snapshot(download?: boolean): string;
  }
}

export {}; 