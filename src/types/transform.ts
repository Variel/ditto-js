

export type Size = {
  width: number;
  height: number;
}

export type Position = {
  x: number;
  y: number;
}

export type Transform = {
  rotation: number;
  scale: number;
} & Size & Position;