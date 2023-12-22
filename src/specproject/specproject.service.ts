import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specproject } from './entities/specproject.entity';
import { Repository } from 'typeorm';
import { CreateSpecprojectDto } from './dto/create-specproject.dto';
import { Slide } from 'src/slides/entities/slide.entity';
import { SlidesService } from 'src/slides/slides.service';

@Injectable()
export class SpecprojectService {
  constructor(
    private readonly slidesService: SlidesService,
    @InjectRepository(Specproject)
    private readonly specProjectRepository: Repository<Specproject>,
  ) {}
  async create(createSpecproject: CreateSpecprojectDto) {
    const existProject = await this.specProjectRepository.findOne({
      where: {
        title: createSpecproject.title,
      },
    });
    if (existProject)
      throw new BadRequestException('This project already exist!');

    const project = await this.specProjectRepository.save({
      title: createSpecproject.title,
      description: createSpecproject.description,
      bgImage: createSpecproject.bgImage,

      tagName: createSpecproject.tagName,
      tagIcon: createSpecproject.tagIcon,
      tagLink: createSpecproject.tagLink,

      buttonText: createSpecproject.buttonText,
      buttonColor: createSpecproject.buttonColor,
      buttonLink: createSpecproject.buttonLink,
      buttonBgColor: createSpecproject.buttonBgColor,
    });

    return { project };
  }
  async getSlides() {
    const slides = await this.slidesService.findAll();
    return slides;
  }
  async findOne(title: string) {
    const project = await this.specProjectRepository.findOne({
      where: { title },
    });
    const slides = await this.getSlides();
    return {
      tag: {
        name: project.tagName,
        icon: project.tagIcon,
        link: project.tagLink,
      },
      title: project.title,
      descriprion: project.description,
      bgImage: project.bgImage,
      button: {
        text: project.buttonText,
        color: project.buttonColor,
        link: project.buttonLink,
        bgColor: project.buttonBgColor,
      },
      slides: slides,
    };
  }
}
