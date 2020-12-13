const config = {
  url: '',
  endpoint: '',
  token: '',
}

const saveAsProfilePicture = async image => {
  const formData = new FormData();

  formData.append("image", image);

  const resp = await fetch(`${config.url}${config.endpoint}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
      body: formData,
    }
  );

  if (!resp.ok && resp.status !== 401) alert('Some error occurred');
}