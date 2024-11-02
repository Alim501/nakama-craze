import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file, dirName: string): Promise<string> {
    try {
      const fileName = uuid.v4() + '.png';
      const filePath = path.resolve('static', dirName);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Произошла ошибка при записи файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async deleteFile(fileName: string, dirName: string): Promise<void> {
    try {
      const filePath = path.resolve('static', dirName, fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      } else {
        throw new HttpException('Файл не найден', HttpStatus.NOT_FOUND);
      }
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Произошла ошибка при удалении файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
