import { Module } from '@nestjs/common';
import { SpecprojectService } from './specproject.service';
import { SpecprojectController } from './specproject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlidesModule } from 'src/slides/slides.module';
import { Specproject } from './entities/specproject.entity';
import { SlidesService } from 'src/slides/slides.service';

@Module({
  imports: [TypeOrmModule.forFeature([Specproject]), SlidesModule],
  controllers: [SpecprojectController],
  providers: [SpecprojectService],
  exports: [SpecprojectService],
})
export class SpecprojectModule {}
