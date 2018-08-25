import React from 'react';

import Banner from './../../Banner';

import PropTypes from 'prop-types';

const CreateArticle = ({ handleInputChange, categories, handleSubmit, errors, editing, article, title, category, content, updateArticle }) => {
	return (
		<div>
			{/* Header */}
  			<Banner 
				backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
				title={editing ? `Editing Article: ${article.title}` : 'Write an article'}
			/>
  			{/* END Header */}
  			{/* Main container */}
  			<main className="main-content">
    			<section className="section">
      				<div className="container">
        				<div className="row">
          					<div className="col-12 col-lg-12">

          						<ul className="list-group">
	          						{errors.map(errors => <li key={errors.message} className="list-group-item text-danger">{errors.message}</li>)}	
          						</ul>

            					<form className="p-30 bg-gray rounded" onSubmit={editing ? updateArticle : handleSubmit}>
              						<div className="row">
                						<div className="form-group col-md-12 my-5">
                  							<input type="file" className="form-control" onChange={handleInputChange} name="image" />
                						</div>
                						<div className="form-group col-12 col-md-6">
                  							<input className="form-control form-control-lg" type="text" name="title" placeholder="Title" value={title} onChange={handleInputChange} />
                						</div>
                						<div className="form-group col-12 col-md-6">
                  							<select name="category" onChange={handleInputChange} value={category} id className="form-control form-control-lg">
                    							<option value>Select category</option>
                    							{categories.map(category => 
                    								<option key={category.id} value={category.id}>{category.name}</option>
                    							)}
                  							</select>
                						</div>
              						</div>
              						<div className="form-group">
                						<textarea className="form-control form-control-lg" rows={4} placeholder="Content" name="content" onChange={handleInputChange} value={content} defaultValue={""} />
              						</div>
              						<div className="text-center">
                						<button className="btn btn-lg btn-primary" type="submit">{editing ? 'Update Article' : 'Create Article'}</button>
              						</div>
            					</form>
          					</div>
        				</div>
      				</div>
    			</section>
  			</main>
  			{/* END Main container */}
		</div>
	);
};

CreateArticle.propTypes = {
	handleInputChange: PropTypes.func.isRequired,
};

export default CreateArticle;