import React from 'react';
import BooksImage from './assets/images/SeekPng.com_magic-book-png_2734161.png';

function Topics() {
  return (
    <div>
           <section id="topics">
        <div className="container-md">
            <div className="text-center">
                <h2>Inside the Book...</h2>
                <p className="lead text-muted">A quick glance at the topics you'll learn</p>
            </div>
            <div className="row my-5 justify-content-around align-items-center g-3 g-lg-0">
                <div className="col-6 col-lg-4">
                    <img src={BooksImage} className="img-fluid" alt="eBook"/>
                </div>
                <div className="col-lg-6">         
                    <div className="accordion" id="chapters">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-1">
                                    Chapter 1 - Harry Potter and the Sorcerer's Stone.
                                </button>
                            </h2>
                            <div id="chapter-1" className="accordion-collapse collapse show" data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>After murdering Harry's parents, James and Lily Potter, evil Lord Voldemort puts
                                        a killing curse on Harry, then just a baby. The curse inexplicably reverses,
                                        defeating Voldemort and searing a lightning-bolt scar in the middle of the
                                        infant's forehead. Harry is then left at the doorstep of his boring but brutish
                                        aunt and uncle, the Dursleys.</p>
                                    <p>For 10 years, Harry lives in the cupboard under the stairs and is subjected to
                                        cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his
                                        11th birthday, Harry receives a letter inviting him to study magic at the
                                        Hogwarts School of Witchcraft and Wizardry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-2">
                                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-2">
                                    Chapter 2 - Harry Potter and the Chamber of Secrets.
                                </button>
                            </h2>
                            <div id="chapter-2" className="accordion-collapse collapse" data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>After a summer spent with the Dursleys, Harry is excited to return to Hogwarts.
                                        An unexpected visitor, the house elf Dobby, tries in vain to prevent Harry from
                                        returning to Hogwarts by getting him to illegally perform magic outside of the
                                        school.</p>
                                    <p>The Ministry of Magic blames Harry anyway, and the Dursleys confiscate Harry's
                                        books and wand. Uncle Vernon puts bars on Harry's windows, imprisoning him in
                                        his room. Fred and George Weasley, Ron's brothers, rescue Harry from 4 Privet
                                        Drive with their father's flying car. Harry spends the remainder of the summer
                                        at the Weasleys' cramped but cozy home.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-3">
                                    Chapter 3 - Harry Potter and the Prisoner of Azkaban.
                                </button>
                            </h2>
                            <div id="chapter-3" className="accordion-collapse collapse" data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Harry ends another insufferable summer at the Dursleys and hears about an escaped
                                        murderer, Sirius Black, in the Muggle news. The wizarding world is also buzzing
                                        about the infamous Sirius, who had been held at Azkaban, a maximum-security
                                        prison for those who have committed severe crimes.</p>
                                    <p>Mr. Weasley warns Harry that Sirius is after him. At Hogwarts, Dumbledore informs
                                        students that the school will be guarded by the dreaded Dementors, Azkaban
                                        guards who can suck the souls out of wizards.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-4">
                                    Chapter 4 - Harry Potter and the Goblet of Fire.
                                </button>
                            </h2>
                            <div id="chapter-4" className="accordion-collapse collapse" data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>At the beginning of Harry's fourth year, Hogwarts students are told they will
                                        hold the once famous Triwizard Tournament, hosting witches from Beauxbatons
                                        Academy and wizards from the Durmstrang Magical Institute.</p>
                                    <p>The Goblet of Fire selects a student to compete from each school. This year,
                                        however, two contestants are selected from Hogwarts: Cedric Diggory and Harry.
                                        Along with the other competitors (Viktor Krum, Fleur Delacour), they must race
                                        to complete three tasks. Task one: snatch a golden egg from a nest guarded by a
                                        deadly dragon. Task two: retrieve something valuable from the bottom of the
                                        Hogwart's lake. Task three: make way through a trap-laden labyrinth and retrieve
                                        the Triwizard Cup.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-5">
                                    Chapter 5 - Harry Potter and the Order of the Phoenix.
                                </button>
                            </h2>
                            <div id="chapter-5" className="accordion-collapse collapse" data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Before his fifth year at Hogwarts, Harry gets an official letter stating that he
                                        is expelled for performing magic outside the school. He is ordered to appear at
                                        a hearing at the Ministry of Magic. Pleading self-defense, Harry is cleared of
                                        the charges against him. The Ministry of Magic refuses to acknowledge that
                                        Voldemort has returned.aliquid!</p>
                                    <p>Meanwhile, a secret society, the Order of the Phoenix, has been formed to combat
                                        Voldemort, who is rumored to be rebuilding his army of Death Eaters. At
                                        Hogwarts, Dolores Umbridge is appointed the new Defense Against the Dark Arts
                                        professor, but she is also spying on the school for the Ministry. Because they
                                        are not learning anything under Umbridge's tutelage, Harry, Hermione and Ron
                                        form a student group, Dumbledore's Army, to prepare for the return of Voldemort.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-6">
                                    Chapter 6 - Harry Potter and the Half-Blood Prince.
                                </button>
                            </h2>
                            <div id="chapter-6" className="accordion-collapse collapse" data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>No longer able to deny Voldemort's return — as the Dark Lord and his minions
                                        wreak havoc in both magic and Muggle communities — the Minster of Magic,
                                        Cornelius Fudge, resigns. Arthur Weasley is promoted to Head of Detection and
                                        Confiscation of Counterfeit Defensive Spells and Protective Objects, and the
                                        Weasleys' financial situation improves.</p>
                                    <p>On the dark side of the world, Draco Malfoy's mother makes Snape swear he will
                                        protect Draco. To everyone's surprise, Snape takes a post he has long coveted:
                                        professor of Defense Against the Dark Arts. Meanwhile, emotions between Harry,
                                        Ron and Hermione are at an all-time high when Ron starts dating Lavender. Harry
                                        is caught between Ron and Hermione's cross fire, which doesn't end until Ron is
                                        poisoned.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-7">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-7">
                                    Chapter 7 - Harry Potter and the Deathly Hallows.
                                </button>
                            </h2>
                            <div id="chapter-7" className="accordion-collapse collapse" data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p> The seventh and final installment in the Harry Potter series opens with a dark
                                        scene at the Malfoys', where Voldemort is awaiting Snape's report on Harry's
                                        whereabouts. The Dark Lord is back in power, and his reach threatens even those
                                        in the Muggle world; at No. 4 Privet Drive, Harry convinces his aunt and uncle
                                        to go into hiding. As the family departs, Dudley thanks Harry for saving his
                                        life. The Order of Phoenix arrives to escort Harry to safety, but they are
                                        attacked by Death Eaters. Harry, Hermione and Ron apparate to the Burrow, home
                                        of the Weasleys.</p>
                                    <p>While the Weasleys prepare for Bill and Fleur Delacour's wedding, Harry, Ron and
                                        Hermione strategize ways to destroy the five remaining Horcruxes. To their
                                        surprise, they discover that Dumbledore, the beloved headmaster of Hogwarts, has
                                        left them items in his will: Hermione, a children's book; Ron, a Deluminator;
                                        and Harry, Gryffindor's sword and a Golden Snitch. Bill and Fleur's wedding
                                        reception is ambushed by Death Eaters, and Harry, Ron and Hermione barely
                                        escape. They start on their quest to find the first Horcrux on their list,
                                        Salazar Slytherin's locket, and steal the Gryffindor sword from the Ministry of
                                        Magic. They find out the sword is a fake, but they manage to steal the locket
                                        from Dolores Umbridge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Topics