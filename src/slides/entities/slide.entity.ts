import { Specproject } from 'src/specproject/entities/specproject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Slide {
  @PrimaryGeneratedColumn({ name: 'slide_id' })
  id: number;
  @Column()
  name: string;
  @Column()
  image: string;
  @Column()
  link: string;
  @Column()
  description?: string;
  @ManyToOne((type) => Specproject, (specproject) => specproject.slides)
  specProjectId: Specproject;
}
[];
