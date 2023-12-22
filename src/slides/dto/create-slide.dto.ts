import { IsOptional } from 'class-validator';
export class CreateSlideDto {
  id: number;
  name: string;
  image: string;
  link: string;
  specProjectId: number;
  @IsOptional()
  description?: string;
}
