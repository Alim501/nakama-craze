import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT =process.env.PORT ||5000
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle("Сайт nakama-craze")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("KDShawn")
    .build()
  const document=SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/api',app,document)
  
  await app.listen(PORT,()=>console.log(`Server started on port = ${PORT}`));

}
bootstrap();
