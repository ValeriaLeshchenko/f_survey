module SurveysHelper
  def current_year
    Time.now.year
  end
  def thousand_years_later
    Time.now.year + 1000
  end
end
