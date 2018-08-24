import React from 'react';

import Banner from '../../Banner';
import Article from '../../Article';

const Articles = ({ articles, handlePagination, nextUrl, prevUrl, deleteArticle }) => {
	return (
		<div>

			<Banner 
				backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-gift.jpg)`}
				title="My Articles"
				subTitle="Here are the article created by you."
			/>

			<main className="main-content bg-gray">

				<div className="row">
					<div className="col-12 col-lg-6 offset-lg-3">

						{articles && articles.map(article => (
						<div key={article.id}>
							<Article
								article={article}
							/>
							<div className="text-center">
								<button onClick={() => deleteArticle(article.id)} className="btn btn-danger">Delete Article</button>
							</div>
							<hr />
						</div>))}

						<nav className="flexbox mt-50 mb-50">
							<a className={`btn btn-white ${prevUrl ? '' : 'disabled'}`} href="#" onClick={() => handlePagination(prevUrl)}>
    							<i className="ti-arrow-left fs-9 ml-4" />
    							Previous Page
  							</a>
							<a className={`btn btn-white ${nextUrl ? '' : 'disabled'}`} href="#" onClick={() => handlePagination(nextUrl)}>
								Next Page
								<i className="ti-arrow-right fs-9 mr-4" />
							</a>
						</nav>
					</div>
				</div>

			</main>
		</div>
	);
};

export default Articles;