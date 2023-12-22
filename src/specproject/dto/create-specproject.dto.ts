import { IsOptional } from 'class-validator';

export interface Button {
  text: string;
  color?: string;
  link?: string;
  bgColor?: string;
}
export interface Tag {
  tagName: string;
  icon?: string;
  link: string;
}
export class CreateSpecprojectDto {
  @IsOptional()
  tagIcon?: string;
  tagName: string;
  tagLink: string;
  buttonText: string;
  @IsOptional()
  buttonColor: string;
  @IsOptional()
  buttonLink: string;
  @IsOptional()
  buttonBgColor: string;
  title: string;
  description: string;
  bgImage: string;
}
