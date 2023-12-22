import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { CreateSpecprojectDto } from './dto/create-specproject.dto';
import { SpecprojectService } from './specproject.service';

@Controller('specproject')
export class SpecprojectController {
  constructor(private readonly specprojectService: SpecprojectService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createSpecprojectDto: CreateSpecprojectDto) {
    return this.specprojectService.create(createSpecprojectDto);
  }
  @Get('getproject')
  getProject(@Body() createSpecprojectDto: CreateSpecprojectDto) {
    return this.specprojectService.findOne(createSpecprojectDto.title);
  }
}
