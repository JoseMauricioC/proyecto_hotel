import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { InterpretesModule } from './interpretes/interpretes.module';

@Module({
  imports: [PersonasModule, EstudiantesModule, InterpretesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
