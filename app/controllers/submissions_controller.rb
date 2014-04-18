class SubmissionsController < ApplicationController
  
  def index
  	@submission = Submission.new
  end

  def create
  	@submission = Submission.new(submission_params)
    @submission.save
    # respond_to do |format|
    #   format.html { }
    #   format.json { }
    # end
    render 'index'
  end

  private

	def submission_params
    params.require(:submission).permit(:income, :ans_one, :ans_two, :ans_three)
  end

end
