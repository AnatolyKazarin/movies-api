import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie) private movieRepository: typeof Movie) {}

  async create(createMovieDto: CreateMovieDto) {
    return await this.movieRepository.create(createMovieDto);
  }

  async findAll() {
    return await this.movieRepository.findAll();
  }

  async findOne(id: number) {
    return await this.movieRepository.findByPk(id);
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    return await this.movieRepository.update(updateMovieDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    const movie = await this.findOne(id);
    return await movie.destroy();
  }
}
