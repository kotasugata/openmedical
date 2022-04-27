class Api::CompaniesController < ApplicationController
  def index
    render json:{status:200, companies: Company.all}
  end

  def create
    company = Comapany.new(company_params)

    if company.save
      render json:{status:200,company:company}
    else
      render json:{status:500,message:"Companyの作成に失敗しました"}
    end
  end

  def destroy
    company = Company.find(params[:id])

    if company.destroy
      render json:{status:200, company:company}
    else
      render json:{status: 500, message: 'Companyの削除に失敗しました'}
    end
  end

  private

    def company_params
      params.require(:company)
    end
end
