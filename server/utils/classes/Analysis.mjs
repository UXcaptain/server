export class Analysis {
  constructor(reqBody, analysisOwner) {
    this.name = reqBody.name;
    this.url = reqBody.url;
    this.device = reqBody.device;
    this.status = 'published'; //* Default until we allow for drafts
    this.owner_id = analysisOwner;
    this.tasks = reqBody.tasks;
    this.maxNumberOfParticipants = reqBody.maxNumberOfParticipants;
    this.scenario = reqBody.scenario;
  }
}
