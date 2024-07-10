import styles from './HomePage.module.scss';
import { Link } from 'react-router-dom';
import dish1 from '../../assets/dishes/Falafel-Pita-by-PictureTheRecipe.jpg';
import dish2 from '../../assets/dishes/salade-chaude-automne-legumes.jpg';
import dish3 from '../../assets/dishes/vue-dessus-delicieuse-tortilla-espagnole.jpg';
import dish4 from '../../assets/dishes/pates.png';
import card_background from '../../assets/card-background-home.svg';
const HomePage = () => {
    return (
        <main className={`${styles.homemain} w-4/5 mx-auto flex flex-col items-center`}>
            <h1>Découvrez vos futurs plats préférés</h1>
            <div>
                <div class=" max-w-2xl  py-16  sm:py-12 lg:max-w-7xl">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish1} alt="titre de l'image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Boulettes vegan
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt voluptatum mollitia minima ea maxime laboriosam reiciendis reprehenderit expedita, recusandae, minus aut voluptas ipsam sapiente consectetur nemo tempora corporis facilis!</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish2} alt="Front of men's Basic Tee in white." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A debitis libero ratione harum aspernatur eum incidunt, dolorem alias, pariatur autem molestiae reprehenderit minus, nostrum nesciunt quidem. Tenetur deserunt pariatur distinctio.</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish3} alt="Front of men's Basic Tee in white." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea, animi libero fugit dolore, rem aut itaque officiis, quibusdam numquam voluptas sapiente ullam iure. Necessitatibus porro in harum. Dolore, eligendi?</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish4} alt="Front of men's Basic Tee in white." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Pates delicieusement accompagnées d'herbes et de leur touche de fromage
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eos ipsum perferendis culpa minus tenetur suscipit? Nobis quo labore quisquam a consectetur iusto voluptatem vel culpa eligendi? Nisi, necessitatibus. Culpa!</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish1} alt="titre de l'image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Boulettes vegan
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt voluptatum mollitia minima ea maxime laboriosam reiciendis reprehenderit expedita, recusandae, minus aut voluptas ipsam sapiente consectetur nemo tempora corporis facilis!</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish2} alt="Front of men's Basic Tee in white." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A debitis libero ratione harum aspernatur eum incidunt, dolorem alias, pariatur autem molestiae reprehenderit minus, nostrum nesciunt quidem. Tenetur deserunt pariatur distinctio.</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish4} alt="Front of men's Basic Tee in white." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Pates delicieusement accompagnées d'herbes et de leur touche de fromage
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eos ipsum perferendis culpa minus tenetur suscipit? Nobis quo labore quisquam a consectetur iusto voluptatem vel culpa eligendi? Nisi, necessitatibus. Culpa!</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={dish3} alt="Front of men's Basic Tee in white." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea, animi libero fugit dolore, rem aut itaque officiis, quibusdam numquam voluptas sapiente ullam iure. Necessitatibus porro in harum. Dolore, eligendi?</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">€35</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`${styles['card-1']} m-4 relative`}>
                    <img src={card_background} alt="background" className={`${styles['card-background']} absolute  `} />
                    <div className={`${styles['card-content']} relative pl-40 pt-20 z-10`}>
                        <p class='kadwa-bold'>Envie de découvrir un univers à part entier ?</p>
                        <p class='kadwa-bold'>Découvrez le chef qui vous convient</p>
                        <Link to="/chefs" className={styles.button}></Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;