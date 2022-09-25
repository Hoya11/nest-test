import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
//mapped-types는 타입을 변환시키고 사용할 수 있게 하는 패키지 (Dto를 변환시키는데 도움을 줌)

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
