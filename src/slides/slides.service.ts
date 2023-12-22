import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSlideDto } from './dto/create-slide.dto';
import { Repository } from 'typeorm';
import { Slide } from './entities/slide.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SlidesService {
  constructor(
    @InjectRepository(Slide)
    private readonly SlideRepository: Repository<Slide>,
  ) {}

  async create(createSlideDto: CreateSlideDto, id: number) {
    const slideExist = this.SlideRepository.findBy({
      specProjectId: { id },
      name: createSlideDto.name,
    });
    if (!slideExist) throw new BadRequestException('Slide allready exist');
    const newSlide = {
      name: createSlideDto.name,
      image: createSlideDto.image,
      link: createSlideDto.link,
      description: createSlideDto.description,
    };
    return await this.SlideRepository.save(newSlide);
  }
  async findAll(): Promise<Slide[]> {
    const slides = this.SlideRepository.find();
    return slides;
  }
}
