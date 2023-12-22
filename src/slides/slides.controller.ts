import { Controller, Post, Body, Req, Get } from '@nestjs/common';
import { SlidesService } from './slides.service';
import { CreateSlideDto } from './dto/create-slide.dto';
import { UpdateSlideDto } from './dto/update-slide.dto';

@Controller('slides')
export class SlidesController {
  constructor(private readonly slidesService: SlidesService) {}

  @Post()
  create(@Body() createSlideDto: CreateSlideDto, @Req() req) {
    return this.slidesService.create(createSlideDto, req.id);
  }
  @Get()
  findAll() {
    return this.slidesService.findAll();
  }
}
