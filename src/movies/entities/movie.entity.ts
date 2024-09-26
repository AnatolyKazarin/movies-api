import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { CreateMovieDto } from '../dto/create-movie.dto';

@Table({ tableName: 'movies' })
export class Movie extends Model<Movie, CreateMovieDto> {
  @ApiProperty({ description: 'Movie ID', example: 1 })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'Movie Title',
    example: 'Best movie title',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    description: 'Movie release year',
    example: 1990,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: string;

  @ApiProperty({
    description: 'Poster link',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  poster: string;
}
