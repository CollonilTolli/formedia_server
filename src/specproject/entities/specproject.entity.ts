import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag, Button } from '../dto/create-specproject.dto';
import { Slide } from 'src/slides/entities/slide.entity';

@Entity()
export class Specproject {
  @PrimaryGeneratedColumn({ name: 'specproject_id' })
  id: number;
  @Column()
  tagName: string;
  @Column()
  tagIcon: string;
  @Column()
  tagLink: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  bgImage: string;
  @Column()
  buttonText: string;
  @Column()
  buttonColor: string;
  @Column()
  buttonLink: string;
  @Column()
  buttonBgColor: string;
  @OneToMany((type) => Slide, (slide) => slide.specProjectId, {
    onDelete: 'CASCADE',
  })
  slides: Slide[];
}
