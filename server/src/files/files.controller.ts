import { Controller, Get, Param, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { join } from 'path';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get(':dirName/:imgpath')
  seeUploadedFile(
    @Param('dirName') dirName: string,
    @Param('imgpath') image: string,
    @Res() res: Response,
  ) {
    return res.sendFile(join(process.cwd(), 'static', dirName, image));
  }
}
