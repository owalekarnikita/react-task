/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './main.css';
import SelectionWidget from './SelectionWidget';

const Main = () => {
  return (
    <div className='main'>
        <header className='head'>
            Awesome Portal
        </header>
        <main className='part'>
            <section className='sec1'>
                <img src='./Images/2.jpg' width='98%'/>
            </section>
            <section className='sec2'>
               <h2 className='padtop'>Excellent Necklace 6*8
               <br/> Diamond AD</h2>
               ABC Sales pvt.Ltd.
               <br/><br/>
               <div className='widpart'>
                    <span> Colors Available</span>
                    <div className='col'>
                        <SelectionWidget options={['Red','Blue','Green','yellow']}/>
                    </div>
               </div>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
               <p>
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
               </p>
               <p>
               At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
               </p>
               <button className='btn'> Buy Now</button>
               <br/><br/><br/>
            </section>
        </main>
        <footer className='foot'>
            All Rights Reserved
        </footer>
    </div>
  )
}

export default Main