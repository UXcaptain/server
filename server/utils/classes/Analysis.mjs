export class Analysis {
  constructor(reqBody, analysisOwner) {
    this.name = reqBody.analysisName;
    this.url = reqBody.analysisUrl;
    this.status = 'published';
    this.owner_id = analysisOwner;
    this.tasks = reqBody.analysisTasks;
    this.max_number_of_participants = reqBody.maxNumberOfParticipants;
  }
}
