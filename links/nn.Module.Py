# Generate Matrices
        kvec = np.arange(0, freq_subbands) + 0.5
        nvec = np.arange(0, window_size) + 0.5 + freq_subbands/2
        cos_an = w * np.cos(np.pi / freq_subbands * kvec[np.newaxis].T * nvec) * np.sqrt(2. / freq_subbands)
        return cos_an

    method = 'scott'
    if ('scott' == method):
        cos_an = scott_method(freq_subbands, window_size, w)
    else:
        cos_an = orig_method(freq_subbands, window_size, w)

    return cos_an.astype(np.float32)


class Analysis(nn.Module):
    """
        Class for building the analysis part
        of the Front-End ('Fe').
    """
    def __init__(self, ft_size=1024, w_size=2048, hop_size=1024, shrink=False):
        super(Analysis, self).__init__()

        # Parameters
        self.batch_size = None
        self.time_domain_samples = None
        self.sz = ft_size
        self.wsz = w_size
        self.hop = hop_size
        self.shrink = shrink

        # Activation Funtion