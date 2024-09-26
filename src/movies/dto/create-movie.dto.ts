import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Max, Min } from "class-validator";

export class CreateMovieDto {
  @ApiProperty({ description: 'Title', example: 'Best movie' })
  @IsString({ message: 'Title should be a string value' })
  readonly title: string;

  @ApiProperty({ description: 'Year', example: '1990' })
  @IsInt({ message: 'Year should be a number between 1900 and 2100' })
  @Min(1900)
  @Max(2100)
  readonly year: string;

  @ApiProperty({ description: 'Poster link' })
  readonly poster: string;
}
