export class Analysis {
  constructor(reqBody, analysisOwner) {
    this.analysis_name = reqBody.analysisName;
    this.analysis_url = reqBody.analysisUrl;
    this.analysis_status = 'published';
    this.analysis_owner_id = analysisOwner;
    this.analysis_tasks = reqBody.analysisTasks;
    this.max_number_of_participants = reqBody.maxNumberOfParticipants;
  }
}
