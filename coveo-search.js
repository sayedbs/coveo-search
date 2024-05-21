import React from 'react';

const CoveoSearch = props => {
  return (
    <>
    <h2>No user view from FE end visit: <a target='__blank' href="https://docs.coveo.com/en/atomic/latest/usage/themes-and-visual-customization/">Link Coveo UI customization</a> or <a href="https://static.cloud.coveo.com/atomic/v2.25/storybook/index.html?path=/story/atomic-icon--default-icon">Coveo Atomic</a> </h2>
    <atomic-search-interface className="search-results-page" id="search">
        <atomic-search-layout section="wrapper">
            <atomic-layout-section section="facets" >
                <atomic-facet-manager>
                    <atomic-facet field="language" label="Therapy Areas" with-search="false"></atomic-facet>
                    <atomic-facet field="language" label="Content Segregation" with-search="false"></atomic-facet>
                    <atomic-facet field="filetype" label="Type of Content" with-search="false"></atomic-facet>
                </atomic-facet-manager>
            </atomic-layout-section>

            <atomic-layout-section section="main">

                <atomic-layout-section section="search">
                    <atomic-search-box></atomic-search-box>
                </atomic-layout-section>

                <atomic-layout-section section="status">
                    <atomic-query-summary></atomic-query-summary>
                    <atomic-refine-toggle></atomic-refine-toggle>
                </atomic-layout-section>

                <atomic-layout-section section="results">
                    <atomic-result-list density="compact" display="list" image-size="large">
                        <atomic-result-template>
                            <template>
                                {/*<atomic-result-section-title style="font-width: 500; margin-top: 5px">*/}
                                {/*    <atomic-result-link target="_blank" style="text-decoration: underline;"></atomic-result-link>*/}
                                {/*    <span className="field"*/}
                                {/*          style="color:var(--atomic-neutral-light); display: inline-block">*/}
                                {/*        <span className="field-label">-</span>*/}
                                {/*        <span className="field-label">Date:</span>*/}
                                {/*         <atomic-result-date></atomic-result-date>*/}
                                {/*        <atomic-field-condition className="field" if-defined="filetype">*/}
                                {/*            <span className="field-label">-</span>*/}
                                {/*            <atomic-result-text field="filetype"></atomic-result-text>*/}
                                {/*        </atomic-field-condition>*/}
                                {/*    </span>*/}
                                {/*</atomic-result-section-title>*/}

                                {/*<atomic-result-section-excerpt*/}
                                {/*    style="max-height: initial; -webkit-line-clamp: 6; margin-bottom: 5px; margin-top: 5px;">*/}
                                {/*    <atomic-result-text field="excerpt"></atomic-result-text>*/}
                                {/*</atomic-result-section-excerpt>*/}
                            </template>
                        </atomic-result-template>
                    </atomic-result-list>

                    <atomic-no-results enable-cancel-last-action="false"></atomic-no-results>
                </atomic-layout-section>

                <atomic-layout-section section="pagination">
                    <atomic-pager className="w-100 d-flex justify-content-center"
                                  previousButtonIcon='<svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none"><path d="M8.15997 1.41L3.57997 6L8.15997 10.59L6.74997 12L0.749973 6L6.74997 0L8.15997 1.41Z" fill="currentcolor"/></svg>'
                                  nextButtonIcon='<svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none"><path d="M0.840027 1.41L5.42003 6L0.840027 10.59L2.25003 12L8.25003 6L2.25003 0L0.840027 1.41Z" fill="currentcolor"/></svg>'
                    ></atomic-pager>
                </atomic-layout-section>

            </atomic-layout-section>

        </atomic-search-layout>
    </atomic-search-interface>
    </>
  )
}

export default CoveoSearch;