/**
 * Get all the guides using the WordPress rest api
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/rest-api/reference/
 */
import { useEffect, useState } from 'react';
import api from '@wordpress/api';
const restUrl = admin_welcome_guide_script_params.rest_url;
export const getPosts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch( restUrl + 'wp/v2/guides?filter[orderby]=date&order=asc');
      const json = await response.json();
      setData(json);
    };
    getData();
  }, []);

  return data;
};

/* Get all the plugin Options */
export const pluginOptions = () => {
  const [ data, setData ] = useState({});
  useEffect(() => {
    api.loadPromise.then(() => {
      const settings = new api.models.Settings();
      if (!data.isAPILoaded) {
        settings.fetch().then((response) => {
          setData({
            isShowPost: response['awg_options']['is_show_post'] ? response['awg_options']['is_show_post'] : '',
            isShowPage: response['awg_options']['is_show_page'] ? response['awg_options']['is_show_page'] : '',
            isShowCPT: response['awg_options']['is_show_cpt'] ? response['awg_options']['is_show_cpt'] : '',
            featuredPostId: response['awg_options'][ 'featured_post_id' ] ? response['awg_options'][ 'featured_post_id' ] : '',
            isAPILoaded: true,
          })
        });
      }
    });
  }, []);
  return data;
}