import { AnalyzerClientService, AnalyzeRequest, AnalyzeResponse } from './../../clients/analyzer-client.service';
import { Injectable, Inject, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  statusEmitter = new EventEmitter<AnalyzeResponse>();

  constructor(private analyzerClient: AnalyzerClientService) {
  }

  sendImage(image: any) {
    const request = new AnalyzeRequest();
    request.imageContent = (<string>image).split(',')[1];
    this.analyzerClient.analyze(request).subscribe((x: AnalyzeResponse) => {
      this.statusEmitter.emit(x);
    });
  }

}


