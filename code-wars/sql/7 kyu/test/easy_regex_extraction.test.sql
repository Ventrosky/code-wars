# calling run_sql will print the results and return them so that you can test data within them.
# if you want to test different sets of data, then its best to move this code into its own top level describe
# block. If you are only testing one set though, its better to set the results before you enter a describe block
# so that the results are presented at the top of the output.
results = run_sql

describe :items do
  it "should return 3 columns" do
    expect(results.first.keys.count).to eq 3
  end
  
  it "should have the correct column names" do
    expect(results.columns[0].to_s).to eq "name"
    expect(results.columns[1].to_s).to eq "greeting"
    expect(results.columns[2].to_s).to eq "user_id"
  end
  
end
describe :rows do    
  it "should return expected results count" do
    expect(results.count).to eq 100
  end
  it "should return expected indexes" do
     results.each_with_index do |result,i|
       expect(result[:user_id]).to eq result[:greeting].match('#([0-9]+)')&.captures&.first
     end
  end
end