class PeopleController < ApplicationController
	before_action :set_people

	def index
		@people = Person.all 
		respond_to do |format|
			format.html { render :index }
			format.json { render json: @people }
		end
	end

	def new 
		@people = Person.new
	end

	def create
		@people = Person.new(people_params)

		if @people.valid?
			@people.save
			render json: @people
		else
			render :new
		end
	end

	def show
		respond_to do |format|
			format.html { render :show }
			format.json { render json: @people }
		end 

	end

	def edit
	    
	end

	def update
		if @people.update(people_params)
        	redirect_to people_path
      	else
        	@errors = @people.errors.full_messages
      		render :edit
      	end
	end

	def destroy
		@people.delete
 		redirect_to people_path, notice: 'Your contact has been deleted.'
	end

	private 

	def people_params
 		params.require(:person).permit(:id, :name, :favoriteCity)
 	end

 	def set_people
		@people = Person.find_by(id: params[:id])
	end	

end
# 	before_action :set_people

# def index
# 		@people = Person.all
# 		respond_to do |format|
# 			format.html { render :index }
# 			format.json { render json: @people } 
# 		end
# 	end
	
# 	def new
# 		@people = Person.new
# 	end

# 	def create
# 		@people =  Person.new(people_params)
		
# 		if @people.valid?
# 	 		@people.save
# 			render json: @people

#  		else
#  			render :new 
#  		end
# 	end

# 	def show
# 		respond_to do |format|
# 			format.html { render :show }
# 			format.json { render json: @people }
# 		end 
# 	end

# 	def edit
# 	end

# 	def update
		
# 	end

# 	def destroy
# 		@people.delete
# 		redirect_to people_path, notice: 'Your contact has been deleted.'
# 	end


# 	private


# 	def people_params
# 		params.require(:person).permit(:id, :name, :favoriteCity)
# 	end

# 	def set_people
# 		@people = Person.find_by(id: params[:id])
# 	end	

	
# end
